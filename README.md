# MADHACK 3.0

## Development

### Setup

**Frontend:**

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm start
```

**Backend:**

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

### Deployment

**Frontend:**

1. Update the backend URL in the `frontend_build.yml` file located in `.github/workflows`. Specifically, set the `REACT_APP_BACKEND_URL` environment variable to the URL of your backend server:

```yaml
REACT_APP_BACKEND_URL = <backend_url>
```

**Backend:**

1. Build the backend application:

```bash
pnpm build
```

2. Deploy the backend application to a suitable hosting platform (e.g., Heroku, AWS, GCP).



