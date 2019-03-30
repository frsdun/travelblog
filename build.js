const fs = require('fs');
const path = require('path');
const common_mark = require('commonmark');

(function () {
    if (!process.argv[2] || !process.argv[3]) { return console.log('Error, setting input and output paths'); }
    const input_path = path.join(__dirname, process.argv[2]);
    const output_path = path.join(__dirname, process.argv[3]);

    let wrap_header_path = process.argv[4] ? path.join(__dirname, process.argv[4]) : false;
    let wrap_footer_path = process.argv[5] ? path.join(__dirname, process.argv[5]) : false;

    empty_directory(output_path);

    // Get all files in dir which do not start with _
    const file_names = fs.readdirSync(input_path).filter(name => !/^_/.test(name));

    file_names.forEach(name => {
        // Limit file types
        if (!/\.md$|\.html$/.test(name)) return;

        // Read data out of file as a string
        let file_data = fs.readFileSync(path.join(input_path, name), { encoding: 'utf8' });

        if (/\.md$/.test(name)) {
            // If its a markdown file convert it to html
            file_data = convert_md_to_html(file_data);
            name = name.replace('.md', '.html');

            // Add header and footer
            if (wrap_header_path) file_data = fs.readFileSync(wrap_header_path, { encoding: 'utf8' }) + file_data;
            if (wrap_footer_path) file_data = file_data + fs.readFileSync(wrap_footer_path, { encoding: 'utf8' });
        }

        const final_data = process_html(file_data)

        fs.writeFileSync(path.join(output_path, name), final_data, { encoding: 'utf8' });
    });

    console.log('Build done!')





    function process_html(html) {
        // Find any html insert points
        const found = find_insert_points(html).reverse();

        found.forEach(insert_point => {
            // Get the html to insert
            let new_html = fs.readFileSync(path.join(input_path, insert_point.name), { encoding: 'utf8' });

            // If the new html has another insert_point then process that first
            if (new_html.includes('@{{')) {
                new_html = process_html(new_html);
            }

            // Insert the new html into the old html and remove the placeholder
            html = insert_html(html, new_html, insert_point.start_index, insert_point.size);
        });

        return html;
    }

    function find_insert_points(html) {
        const pattern = /(@{{.*?}})/g;
        const found = [];
        while ((match = pattern.exec(html)) != null) {
            found.push({ 'name': match[0].replace('@{{', '').replace('}}', ''), 'start_index': match.index, 'size': match[0].length })
        }
        return found;
    }

    function insert_html(old_html, new_html, insert_start_position, place_holder_size) {
        return old_html.slice(0, insert_start_position) + new_html + old_html.slice(insert_start_position + place_holder_size, old_html.length);
    }

    function empty_directory(directory) {
        const file_names = fs.readdirSync(directory);
        file_names.forEach(name => {
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
