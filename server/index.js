const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const db = require("./config/db");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());


function generateHash(title) {

  const current = new Date();
  const mani_string = title + current.toString();
  let hash = crypto.createHash('sha256').update(mani_string).digest('hex').toString();
  hash = hash.substring(0, 4) + hash.substring(hash.length - 4, hash.length);
  return hash;
}



app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});


app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM tasks WHERE TaskID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});


app.post("/api/create", (req, res) => {
  console.log(req.body);
  const title = req.body.Title;
  const description = req.body.Description;
  const status = req.body.Status;
  const id = generateHash(req.body.Title);
  console.log({
    Title: title,
    Desc: description,
    Status: status,
    ID: id
  });

  db.query("INSERT INTO tasks (Title, Description, Status, TaskID) VALUES (?, ?, ?, ?)", 
    [title, description, status, id], 
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      console.log(result);
      res.send(result);
  });
});


app.post("/api/update/:id", (req, res) => {
  const title = req.params.title;
  const description = req.params.description;
  const id = req.params.id;

  db.query("UPDATE tasks SET Title = ?, Description = ? WHERE taskid = id", 
    [title, description], 
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
  });
});


app.post("/api/updateStatus/:id", (req, res) => {
  const status = req.params.status;

  db.query("UPDATE tasks SET status = ? WHERE taskid = id", 
    status, 
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
  });
});

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM tasks WHERE TaskID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

