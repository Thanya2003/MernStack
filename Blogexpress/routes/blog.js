const express= require('express');
const router= express.Router();
const path= require('path');
const blogs=require('../data/blogs')

router.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, '../template/index.html'));
    res.render('home')
})
router.get('/blog', (req, res)=>{
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
    // res.sendFile(path.join(__dirname, '../views/bloghome.html'));
    res.render('blogHome',{
        blogss: blogs
    })
})

router.get('/blogPost/:slug', (req, res)=>{
    console.log(req.params.slug)
    const myblog=blogs.filter((e) => {
        return e.slug==req.params.slug;
    });
    res.render('blogPage',
    {
        title: myblog[0].title,
        content: myblog[0].content
    }    
    )
    // console.log(myblog)
    // res.sendFile(path.join(__dirname, '../views/blogpage.html'));
})

module.exports= router;