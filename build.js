const fs = require('fs');
const path = require('path');
const common_mark = require('commonmark');

(function () {
    // Get the two file paths
    if (!process.argv[2] || !process.argv[3] || !process.argv[4]) { return console.log('Error, setting input and output paths'); }
    const input_path = path.join(__dirname, process.argv[2]);
    const output_path = path.join(__dirname, process.argv[3]);
    const layout_path = path.join(__dirname, process.argv[4]);

    delete_html_from_directory(output_path);

    // Get all files in dir which do not start with _ and are either .html or .md
    const file_names = fs.readdirSync(input_path).filter(name => !/^_/.test(name) && /\.md$|\.html$/.test(name));

    file_names.forEach(name => {
        // Read data out of file as a string
        let file_data = fs.readFileSync(path.join(input_path, name), { encoding: 'utf8' });

        if (/\.md$/.test(name)) {
            // If its a markdown file convert it to html
            file_data = convert_md_to_html(file_data);
            name = name.replace('.md', '.html');
        }

        file_data = insert_into_layout(file_data, layout_path);

        const final_data = process_html(file_data);

        fs.writeFileSync(path.join(output_path, name), final_data, { encoding: 'utf8' });
    });

    console.log('Build done!')


    function insert_into_layout(html, layout_path) {
        let layout_data = fs.readFileSync(layout_path, { encoding: 'utf8' });
        return layout_data.replace('${{body}}', html);
    }



    function process_html(html) {
        // Find and process any html insert points "@{{...}}"
        const found_insert_points = find_insert_points(html).reverse();
        //console.log(found_insert_points);

        found_insert_points.forEach(insert_point => {
            // Get the html to insert
            let new_html = fs.readFileSync(path.join(input_path, insert_point.content.src), { encoding: 'utf8' });

            // Find and process any data_points "${{...}}"
            const found_data_points = find_data_points(new_html).reverse();
            //console.log(found_data_points);

            found_data_points.forEach(data_point => {
                // Extract the data from the insert_point json using the key from the data_point
                let data_content = insert_point.content[data_point.key];

                if (!data_content) {
                    console.log('Problem matching key(' + data_point.key + ') with data_point');
                    data_content = '';
                }

                // Insert the new html into the old html and remove the placeholder
                new_html = insert_html(new_html, data_content, data_point.start_index, data_point.size);
            });

            // If the new html has another insert_point then process that first
            if (new_html.includes('@{{')) {
                new_html = process_html(new_html);
            }

            // Insert the new html into the old html and remove the placeholder
            html = insert_html(html, new_html, insert_point.start_index, insert_point.size);
        });

        html = set_title(html);

        return html;
    }

    function set_title(html) {
        return html;
    }

    function find_data_points(html) {
        const pattern = /\${{([\s\S]*?)}}/g;
        const found = [];
        while ((match = pattern.exec(html)) != null) {
            found.push({ 'key': match[0].replace('${{', '').replace('}}', ''), 'start_index': match.index, 'size': match[0].length })
        }
        return found;
    }

    function find_insert_points(html) {
        const pattern = /@{{([\s\S]*?)}}/g;
        const found = [];
        while ((match = pattern.exec(html)) != null) {
            const content = match[0].replace(/&quot;/g, '"').replace('@{{', '{').replace('}}', '}').replace(/\r?\n|\r/g, '');
            found.push({ 'content': JSON.parse(content), 'start_index': match.index, 'size': match[0].length })
        }
        return found;
    }

    function insert_html(old_html, new_html, insert_start_position, place_holder_size) {
        return old_html.slice(0, insert_start_position) + new_html + old_html.slice(insert_start_position + place_holder_size, old_html.length);
    }

    function delete_html_from_directory(directory) {
        const file_names = fs.readdirSync(directory);
        file_names.forEach(name => {
            if (/\.html$/.test(name))
                fs.unlinkSync(path.join(directory, name));
        });
    }

    function convert_md_to_html(md_string) {
        let reader = new common_mark.Parser();
        let writer = new common_mark.HtmlRenderer();
        let parsed = reader.parse(md_string);
        return writer.render(parsed);
    }
})();
