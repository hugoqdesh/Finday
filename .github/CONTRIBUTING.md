# Contributing to Finday

Thanks for your interest in contributing! This guide explains how to get Finday running locally and how to submit high-quality contributions.

## Prerequisites

Before you start, make sure you have the following installed or available:

- **Node.js** ≥ 20.x
- **pnpm** ≥ 8.x (install with npm i -g pnpm)
- **MongoDB** database
- **Google** and **GitHub** OAuth apps (for authentication)
- **Optional**: [Polar](https://sandbox.polar.sh) sandbox account if you want to test payments

---

## Getting Started

1. [Fork](https://github.com/hugoqdesh/finday/fork/) this repository to your own account

   - Visit Finday repository

   - Click the "Fork" button in the top right

   - [Clone](https://help.github.com/articles/cloning-a-repository/) the fork to your local device.

   ```bash
   git clone https://github.com/YOUR-USERNAME/finday.git
   cd finday
   ```

   - add the original repo as upstream

   ```bash
   git remote add upstream https://github.com/hugoqdesh/finday.git
   ```

2. Install Dependencies

   ```bash
   pnpm install
   ```

3. Configure Environment Variables

   Fill in the values in .env file (refer to .env.example):

4. Database Setup

   We use MongoDB for the database. Create a MongoDB project and copy your connection string.

### Google OAuth

Create a project in the Google Cloud Console.
Follow [the first step](https://www.better-auth.com/docs/authentication/google) in the Better Auth documentation to set up Google OAuth and set the values for `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

### GitHub OAuth

If you would rather use github you can follow [the first step](https://www.better-auth.com/docs/authentication/github#get-your-github-credentials) in the better auth docs to setup Github oAuth and set the environment values for `GITHUB_ID` and `GITHUB_SECRET`

## Running the Application

```bash
pnpm dev
```

## Making changes

1. Create a new branch for your changes

   ```bash
   git checkout -b feature/your-feature
   ```

2. Test your changes and make sure they work and run a build

   ```bash
   pnpm build
   ```

3. If your build succeeds you can go ahead and make a commit using conventional [commit messages](https://www.conventionalcommits.org/en/v1.0.0/)

```bash
git commit -m "fix sidebar overflow issue"
```

## Pull Request Guidelines

- Your PR should reference an issue (if applicable) or clearly describe its impact on the project. [see how to Link a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)
- Include a clear description of the changes
- Keep PRs small and focused. Large PRs are harder to review and may be rejected or delayed.
- Ensure consistency with the existing codebase. Use Biome for formatting.
- Include tests if applicable
- Update documentation if your changes affect usage or API behavior.

## Code Style

- Follow the existing code formatting in the project (use Biome for consistency).
- Write clear, self-documenting code
- Add comments only when necessary to explain complex logic
- Use meaningful variable and function names

## Reporting Issues

- Use the GitHub issue tracker
- Check if the issue already exists before creating a new one
- Provide a clear description of the issue
- Include steps to reproduce the issue

## Need Help?

Feel free to open an issue for questions.

Thank you for contributing!
