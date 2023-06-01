export default  {

    name: 'product',
    type: 'document',
    title: 'product',
    fields:[
        {
            name: 'products',
            type: 'string',
            title: 'Your Product'
    },

    {
        name: 'description',
        type: 'string',
        title: 'product description'
    },

    {
        name: 'image',
        type: 'image',
        title: 'Product Image'

    },

    {
        name: "price",
        type: "number",
        title: "Product Price"
    },

    {
        name: "category",
        title: "Category",
        type: "reference",
        to:[{
                type: "category"
        }]
        
    }

    
]    
    }  
    

