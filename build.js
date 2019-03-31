const fs = require('fs');
const path = require('path');

if (!process.argv[2] || !process.argv[3] || !process.argv[4]) { return console.log('Error, setting input and output paths'); }
const input_path = path.join(__dirname, process.argv[2]);
const output_path = path.join(__dirname, process.argv[3]);
const layout_path = path.join(__dirname, process.argv[4]);

// Get all ".html" files in directory(input_path) which do not start with "_"
const file_names = fs.readdirSync(input_path).filter(name => !/^_/.test(name) && /\.html$/.test(name));

// Process each file
file_names.forEach(name => {
    // Delete corresponding file
    delete_file_from_directory(name, output_path)

    // Read data out of file as a string
    let file_data = fs.readFileSync(path.join(input_path, name), { encoding: 'utf8' });

    // Insert the file_data into the layout
    const layout_data = fs.readFileSync(layout_path, { encoding: 'utf8' });
    file_data = layout_data.replace('@link{{"src":"main-content"}}', file_data);

    // Process each file
    const final_data = process_data(file_data);

    // Write file to output directory
    fs.writeFileSync(path.join(output_path, name), final_data, { encoding: 'utf8' });
});

console.log('Build done!')


/* -------------------------------------- Functions --------------------------------------*/


function process_data(html) {
    // links - link to html file, can pass in props
    // props - json to pass up 
    // insert - placeholder and key to insert a property value

    // fist find link, then for each link resolve its inserts
    let links = find_tokens(html, 'link');
    links.forEach(token => {
        if (!token.hasOwnProperty('src')) return console.log('Links must have a "src" property')

        // Get the html to link in
        let new_html = fs.readFileSync(path.join(input_path, token.src), { encoding: 'utf8' });

        new_html = process_inserts(new_html, token);

        // If the new html has another insert_point then process that first
        if (new_html.includes('@link{{')) {
            new_html = process_data(new_html);
        }

        html = insert_html(html, new_html, token.start_index, token.size);
    });

    // Second process Props
    let props = find_tokens(html, 'props');
    let stored_props = {};
    props.forEach(token => {
        for (var propertyName in token) {
            if (propertyName != 'type' && propertyName != 'size' && propertyName != 'start_index') {
                // stored_props.push({ key: propertyName, value: token[propertyName] })
                stored_props[propertyName] = token[propertyName];
            }
        }
        // Remove the props text
        html = insert_html(html, '', token.start_index, token.size);
    });

    // Third, place the stored_props into the matching inserts
    html = process_inserts(html, stored_props)

    return html;
}

function process_inserts(html, obj_with_prop) {
    let inserts = find_tokens(html, 'insert');
    inserts.forEach(token => {
        if (!token.key) return console.log('Key not set on insert');
        let value = '';
        if (obj_with_prop) {
            value = obj_with_prop[token.key]
        }

        if (!value) value = ''

        html = insert_html(html, value, token.start_index, token.size);
    });
    return html;
}

function find_tokens(html, token) {
    const pattern = new RegExp('@' + token + '{{([\\s\\S]*?)}}', 'g');
    const found = [];

    if (token === 'insert') {
        while ((match = pattern.exec(html)) != null) {
            let found_item = {};
            found_item.key = match[0].replace('@' + token + '{{', '').replace('}}', '');
            found_item.type = token;
            found_item.start_index = match.index;
            found_item.size = match[0].length;
            found.push(found_item)
        }
    } else {
        while ((match = pattern.exec(html)) != null) {
            const content = match[0].replace('@' + token + '{{', '{').replace('}}', '}').replace(/\r?\n|\r/g, '');
            let found_item = JSON.parse(content);
            found_item.type = token;
            found_item.start_index = match.index;
            found_item.size = match[0].length;
            found.push(found_item)
        }
    }
    //console.log(found.reverse());
    return found.reverse();
}

function insert_html(old_html, new_html, insert_start_position, place_holder_size) {
    return old_html.slice(0, insert_start_position) + new_html + old_html.slice(insert_start_position + place_holder_size, old_html.length);
}





function delete_file_from_directory(file_name, directory) {
    const file_names = fs.readdirSync(directory);
    file_names.forEach(name => {
        if (file_name == name)
            fs.unlinkSync(path.join(directory, name));
    });
}
