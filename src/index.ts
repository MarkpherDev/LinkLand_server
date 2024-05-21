import server from "./server";
import { PORT } from "./utils/constants";

server.listen(PORT, () => {
	console.log(`Rest API funcionando en http://localhost:${PORT}/api/v1`);
});
