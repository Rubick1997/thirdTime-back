import { fileURLToPath } from "url";
import { dirname } from "path";
import UserService from "./UserService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class UserController {
  async defaultRoute(req, res) {
    res.sendFile(__dirname + "/index.html");
  }
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      const { query } = req;
      let newRes = null;
      if (query.sortOrder === "1") {
        newRes = users.sort((a, b) => a.rank - b.rank);
      } else if (query.sortOrder === "-1") {
        newRes = users.sort((a, b) => b.rank - a.rank);
      }
      const data = {
        sortOrder: query.sortOrder ?? null,
        entries: newRes ?? users,
      };
      if (query.view === "global") {
        data["nextPage"] = -1;
        data["previousPage"] = -1;
      }
      return res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();
