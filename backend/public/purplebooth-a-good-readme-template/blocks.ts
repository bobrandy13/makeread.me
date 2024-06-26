import { FullTemplate, IFunction, Template } from '../../src/api/templates/template.model'

const templateHeadData: Template = {
    title: 'A Good ReadME Template',
    description: 'A template to make good README.md',
    author: {
        name: 'Billie Thompson',
        url: {
            url: 'https://github.com/PurpleBooth',
            _type: 'Github',
        },
    },
    contributors: [
        {
            name: 'Shaan Khan',
            url: {
                url: 'https://github.com/ShaanCoding',
                _type: 'Github',
            },
        },
    ],
    image: '',
    dateCreated: new Date('2024-04-15T00:00:00.000Z'),
    lastUpdated: new Date('2024-04-16T12:00:00.000Z'),
    tags: [
        {
            name: 'Read Me',
            url: 'read-me',
        },
        {
            name: 'Recommended',
            url: 'recommended',
        },
        {
            name: 'CC0-1.0 License',
            url: 'cc0-1.0-license',
        },
    ],
    featured: false,
    folder: 'purplebooth-a-good-readme-template',
    pageType: 'ReadME',
    startupBlocks: [
        'projectHeaderMacro',
        'gettingStartedMacro',
        'prerequisitesMacro',
        'installationMacro',
        'runningTheTestsMacro',
        'deploymentMacro',
        'builtWithMacro',
        'contributingMacro',
        'versioningMacro',
        'authorsMacro',
        'licenseMacro',
        'acknowledgmentsMacro',
    ],
}

const functionsList: IFunction[] = [
    {
        name: 'Header',
        description: 'A header for the README',
        function: 'projectHeaderMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Project Title',
                name: 'projectTitle',
                defaultValue: 'Project Title',
                _type: 'input',
            },
            {
                label: 'Project Description',
                name: 'projectDescription',
                defaultValue:
                    'One Paragraph of the project description\n\nInitially appeared on\n[gist](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2). But the page cannot open anymore so that is why I have moved it here.',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Getting Started',
        description: 'A section to describe how to get started with the project',
        function: 'gettingStartedMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Getting Started Description',
                name: 'gettingStartedDescription',
                defaultValue:
                    'These instructions will give you a copy of the project up and running on\nyour local machine for development and testing purposes. See deployment\nfor notes on deploying the project on a live system.',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Prerequisites',
        description: 'A section to describe the prerequisites for the project',
        function: 'prerequisitesMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Prerequisites Description',
                name: 'prerequisitesDescription',
                defaultValue:
                    'Requirements for the software and other tools to build, test and push \n- [Example 1](https://www.example.com)\n- [Example 2](https://www.example.com)',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Installation',
        description: 'A section to describe how to install the project',
        function: 'installationMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Installation Description',
                name: 'installationDescription',
                defaultValue:
                    'A step by step series of examples that tell you how to get a development\r\nenvironment running\r\n\r\nSay what the step will be\r\n\r\n    Give the example\r\n\r\nAnd repeat\r\n\r\n    until finished\r\n\r\nEnd with an example of getting some data out of the system or using it\r\nfor a little demo',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Running The Tests',
        description: 'A section to describe how to run the tests for the project',
        function: 'runningTheTestsMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Running The Tests Description',
                name: 'runningTheTestsDescription',
                defaultValue:
                    'Explain how to run the automated tests for this system\r\n\r\n### Sample Tests\r\n\r\nExplain what these tests test and why\r\n\r\n    Give an example\r\n\r\n### Style test\r\n\r\nChecks if the best practices and the right coding style has been used.\r\n\r\n    Give an example',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Deployment',
        description: 'A section to describe how to deploy the project',
        function: 'deploymentMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Deployment Description',
                name: 'deploymentDescription',
                defaultValue: 'Add additional notes to deploy this on a live system',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Built With',
        description: 'A section to describe what the project was built with',
        function: 'builtWithMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Built With Description',
                name: 'builtWithDescription',
                defaultValue: 'Mention the tools you used to build this project',
                _type: 'textArea',
            },
            {
                label: 'Built With List',
                name: 'builtWithList',
                defaultValue: [
                    {
                        url: 'https://www.contributor-covenant.org/',
                        altTag: 'Contributor Covenant',
                    },
                    {
                        url: 'https://creativecommons.org/',
                        altTag: 'Creative Commons',
                    },
                ],
                _type: 'list',
                listSchema: [
                    {
                        label: 'Tool URL',
                        name: 'url',
                        _type: 'input',
                    },
                    {
                        label: 'Tool Name',
                        name: 'altTag',
                        _type: 'input',
                    },
                ],
            },
        ],
    },
    {
        name: 'Contributing',
        description: 'A section to describe how to contribute to the project',
        function: 'contributingMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Contributing Description',
                name: 'contributingDescription',
                defaultValue: 'Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code\r\nof conduct, and the process for submitting pull requests to us.',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Versioning',
        description: 'A section to describe the versioning of the project',
        function: 'versioningMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Versioning Description',
                name: 'versioningDescription',
                defaultValue:
                    'We use [Semantic Versioning](http://semver.org/) for versioning. For the versions\r\navailable, see the [tags on this\r\nrepository](https://github.com/PurpleBooth/a-good-readme-template/tags).',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Authors',
        description: 'A section to describe the authors of the project',
        function: 'authorsMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Authors Description',
                name: 'authorsDescription',
                defaultValue: 'See also the list of\r\n[contributors](https://github.com/PurpleBooth/a-good-readme-template/contributors)\r\nwho participated in this project.',
                _type: 'textArea',
            },
            {
                label: 'Authors List',
                name: 'authorsList',
                defaultValue: [
                    {
                        description: '**Billie Thompson** - _Provided README Template_',
                        name: 'PurpleBooth',
                        url: 'https://github.com/PurpleBooth',
                    },
                    {
                        description: '**Shaan Khan** - _Provided Created README Generator_',
                        name: 'Shaan Khan',
                        url: 'https://github.com/ShaanCoding',
                    },
                ],
                _type: 'list',
                listSchema: [
                    {
                        label: 'Description',
                        name: 'description',
                        _type: 'input',
                    },
                    {
                        label: 'Author Name',
                        name: 'name',
                        _type: 'input',
                    },
                    {
                        label: 'Author URL',
                        name: 'url',
                        _type: 'input',
                    },
                ],
            },
        ],
    },
    {
        name: 'License',
        description: 'A section to describe the license of the project',
        function: 'licenseMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'License Description',
                name: 'licenseDescription',
                defaultValue:
                    'This project is licensed under the [CC0 1.0 Universal](LICENSE.md)\r\nCreative Commons License - see the [LICENSE.md](LICENSE.md) file for\r\ndetails',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Acknowledgments',
        description: 'A section to describe the acknowledgments of the project',
        function: 'acknowledgmentsMacro',
        folder: 'purplebooth-a-good-readme-template',
        variables: [
            {
                label: 'Acknowledgments Description',
                name: 'acknowledgmentsDescription',
                defaultValue: '- Hat tip to anyone whose code is used\r\n- Inspiration\r\n- etc',
                _type: 'textArea',
            },
        ],
    },
]

const templateData: FullTemplate = {
    ...templateHeadData,
    functions: functionsList,
}

export default templateData
