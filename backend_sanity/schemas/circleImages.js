export default {
    name: 'circleImages',
    title: 'Circle Images',
    type: 'document',
    fields: [
        {
            name: 'technology',
            title: 'Technology Name',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}