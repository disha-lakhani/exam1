const isvalid = (req, res, Next) => {
    let { taskname, description, status } = req.body
    console.log(req.body);

    if (taskname && description && status) {
        Next();
    }
    else {
        res.send("invalid data..")
    }
}

module.exports=isvalid