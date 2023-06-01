import { defineField, defineType } from "sanity";

export const category = defineType( {
       type: "document",
       name: "category",
       title: "category",
       fields:[
        defineField(
            {
                name: "category",
                type: "string",
                title: "category"
            }
        )
       ]
})