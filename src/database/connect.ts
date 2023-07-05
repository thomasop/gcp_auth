import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

let connect = new Sequelize(`postgresql://postgres:${process.env.DATABASE_PASSWORD}@db.wbwoxzrfkrbunqpekiiz.supabase.co:5432/postgres`)

try {
  connect.authenticate();
  console.log("Database is connecting");
} catch (error) {
  console.log(error);
}

export default connect;

/* build-publish:
    needs: test
    runs-on: ubuntu-latest
    environment: gcp
    name: build docker image and push it to the GAR
    steps:
      - uses: actions/checkout@v3
        with:
          ref: ${{ github.event.push.head.ref }}
      - name: build code
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Login to GAR
        uses: docker/login-action@v2
        with:
          registry: europe-west1-docker.pkg.dev/auth-391914/auth
          username: _json_key
          password: ${{ secrets.GCP_REGISTRY_KEY }}
      - run: docker build -t auth/devops-workshop-api:${{ github.sha }} .
      - run: docker push auth/devops-workshop-api:${{ github.sha }} */
