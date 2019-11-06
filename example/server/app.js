import app from 'sfapp';
app.router.get('/*', ctx => {
    ctx.redirect('/react');
    ctx.status = 301;
});
export default app;

