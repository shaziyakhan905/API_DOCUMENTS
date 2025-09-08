const dashboard = [{
    name: "Dashboard",
    path: "/landing/dashboard"
}]

export const BREADCRUMS = {
    notice: {
        list: [
            ...dashboard,
            {
                name: "Notice",
                path: ""
            }
        ],
        create: [
            ...dashboard,
            {
                name: "Notice",
                path: "/landing/notice"
            },
            {
                name: "Create Notice",
                path: ""
            }
        ],
        view: [
            ...dashboard,
            {
                name: "Notice",
                path: "/landing/notice"
            },
            {
                name: "View Notice",
                path: ""
            }
        ]
    },
    product: {
        list: [
            ...dashboard,
            {
                name: "Product",
                path: ""
            }
        ],
        create: [
            ...dashboard,
            {
                name: "Products",
                path: "/landing/products"
            },
            {
                name: "Create Product",
                path: ""
            }
        ],
        view: [
            ...dashboard,
            {
                name: "Products",
                path: "/landing/products"
            },
            {
                name: "View Product",
                path: ""
            }
        ]
    },
    user: {
        list: [
            ...dashboard,
            {
                name: "user",
                path: ""
            }
        ],
        view: [
            ...dashboard,
            {
                name: "user",
                path: "/landing/user"
            },
            {
                name: "View Product",
                path: ""
            }
        ]

    },
    news: {
    list:[
        ...dashboard,
        {
            name: "news",
            path: "/landing/news-manegment"
        },
    ],
     create: [
            ...dashboard,
            {
                name: "news",
                path: "/landing/news-manegment"
            },
            {
                name: "Create News",
                path: ""
            }
        ],
}
}
