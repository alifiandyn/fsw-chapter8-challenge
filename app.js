const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./server/routes");
const errorHandler = require("./server/middlewares/errorHandler");
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);

// api docs
const swaggerUi = require("swagger-ui-express");
// api docs configuration
const swaggerDocument = require("./docs/swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
