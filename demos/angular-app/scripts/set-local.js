const fs = require('fs');

const json = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
json['dependencies']['custom-react-flow'] = 'file:../../designer';
json['dependencies']['custom-react-flow-angular'] = 'file:../../angular/designer-dist';

fs.writeFileSync('../package.json', JSON.stringify(json, null, '\t'), 'utf8');
