export default {
    name: 'personalInfo',
    title: 'Personal Info',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'countryCode',
            title: 'Country Code ',
            type: 'string'
        },
        {
            name: 'mobile',
            title: 'Mobile No',
            type: 'string'
        },
        {
            name: 'designation1',
            title: 'Designation 1',
            type: 'string'
        },
        {
            name: 'designation2',
            title: 'Designation 2',
            type: 'string'
        },
        {
            name: 'designation3',
            title: 'Designation 3',
            type: 'string'
        },
        {
            name: 'designation4',
            title: 'Designation 4',
            type: 'string'
        },
        {
            name: 'designation5',
            title: 'Designation 5',
            type: 'string'
        },
        {
            name: 'greetings',
            title: 'Greetings Message',
            type: 'string'
        },       
        {
            name: 'waveEmoji',
            title: 'Wave Emoji',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}