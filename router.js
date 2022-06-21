import Router from "express";
import UserController from "./UserController.js";
const router = new Router();

router.get("/", UserController.defaultRoute);

/**
 * @openapi
 * /api/v1/leaderboard:
 *  get:
 *     tags:
 *     - Leaderboard
 *     summary: Get players
 *     description: Returns all game players
 *     parameters:
 *       - in: query
 *         name: eventName
 *         type: string
 *         description: Name of the event.
 *         required: false
 *       - in: query
 *         name: view
 *         type: string
 *         description: Name of the view.
 *         required: false
 *       - in: query
 *         name: sortOrder
 *         type: 1 || -1 || null
 *         description: Name of the view.
 *         required: false
 *     responses:
 *       200:
 *         description: List returned
 *       500:
 *        description: Connection issues
 *  post:
 *     tags:
 *     - Leaderboard
 *     summary: Create a player
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - score
 *              - rank
 *              - picture
 *            properties:
 *              name:
 *                type: string
 *                default: New Player Name
 *              score:
 *                type: number
 *                default: 50
 *              rank:
 *                type: number
 *                default: 50
 *              picture:
 *                type: string
 *                default: image.jpg
 *     responses:
 *      201:
 *        description: Created
 *      500:
 *        description: Connection issues
 */

router.post("/leaderboard", UserController.create);
router.get("/leaderboard", UserController.getAll);

export default router;
