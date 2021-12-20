# -*- coding: utf-8 -*-
{
    'name': "myuhuu",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',
    'license':'LGPL-3',
    # any module necessary for this one to work correctly
    'depends': ['base','web'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    
    'assets': {
        #'web.assets_backend': [
        #    'web/static/src/xml/**/*',
        #],
        'web.assets_common': [
            'myuhuu/static/lib/js/myuhuu.js'
        ]
        #'web.qunit_suite_tests': [
        #    'web/static/src/js/webclient_tests.js',
        #],
    },
}
