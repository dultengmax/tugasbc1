const express = require("express");
const path = require("path");
const { title } = require("process");
const app = express();
const port = 5000;
const config = require("./config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// parshing
app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/home", home);
app.get("/addproject", addproject);
app.post("/addproject", addblog);
app.get("/contact", contact);
app.get('/blog-detail/:id', blogDetail)
app.get("/delete-blog/:id", deleteBlog);
app.get("/testimony", testimony);
app.get("/editproject", editproject);
// app.post('/editproject',editblog)

// static file servers
app.use(express.static("src/assets"));

const datablog = [];

async function home(req, res) {
  try {
    const query = `SELECT id, title, img, content, "createdAt" FROM blogs`;
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT });

    const datablog = obj.map((res) => ({
      ...res,
      author: "abdul",
    }));
    console.log(datablog);

    res.render("index", { blogs: datablog });
  } catch (error) {
    console.log(error);
  }
}

function addproject(req, res) {
  res.render("MyProject");
}

function editproject(req, res) {
  res.render("editproject");
}

function editblog(req, res) {
  datablog.splice(id, 1);
  console.log(datablog);
  res.redirect("/home");
}

function contact(req, res) {
  res.render("contact");
}
function testimony(req, res) {
  res.render("testimony");
}

function blogDetail(req, res) {
  const { id } = req.params
  res.render('blog-detail', { datablog })
}

function addblog(req, res) {
  const {
    title,
    content,
    start,
    until,
    check1,
    check2,
    check3,
    check4,
    upload,
  } = req.body;
  // show time
  let diff = new Date(until) - new Date(start);
  let day = diff / (3600000 * 24);
  let week = day / 7;
  let month = day / 30;

  let duration;

  if (day <= 7) {
    duration = `${day} hari`;
  } else if (day > 7 && day < 30) {
    duration = `${Math.floor(week)} minggu`;
  } else if (day >= 30) {
    duration = `${Math.floor(month)} bulan`;
  }

  let teknologi = [];

  if (check1) {
    teknologi.push(`fa-brands fa-node fa-xl`);
  } else {
    jsicon = "";
  }
  if (check2) {
    teknologi.push(`fa-brands fa-square-facebook fa-xl`);
  } else {
    reacticon = "";
  }
  if (check3) {
    teknologi.push(`fa-brands fa-java`);
  } else {
    nexticon = "";
  }
  if (check4) {
    teknologi.push(`fa-brands fa-square-js fa-xl" id="iconstate`);
  } else {
    typeicon = "";
  }

  const data = {
    title,
    content,
    start,
    until,
    author: "abdul",
    teknologi,
    duration,
    upload,
  };

  datablog.unshift(data);
  console.log(datablog);
  res.redirect("/home");
}

function deleteBlog(req, res) {
  const { id } = req.params;
  console.log(id);
  datablog.splice(id, 1);
  console.log(datablog);
  res.redirect("/home");
}

app.listen(port, () => {
  console.log("app listening on port 5000");
});
