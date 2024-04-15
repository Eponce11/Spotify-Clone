import makeApp from "./app";
import { PrismaClient } from "@prisma/client";

const PORT: Number = 8000;
const prisma = new PrismaClient();
const app = makeApp({ prisma });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));