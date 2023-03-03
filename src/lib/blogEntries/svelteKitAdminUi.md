---
title: SvelteKit admin UI
date: "2023-03-03"
# editDate: "2023-02-24"
summary: Crating an admin UI for our API
tags: [frontend, svelteKit]
---

# Intro

At [Unith](https://unith.ai/), we specialize in Digital Avatars. We provide an API that lets clients create heads and connect conversation providers to it. We also provide a nice UI that lets end users chat with digital avatars, using that conversation.

This API was developed as a prototype about two years ago. It is written on Python using [FastAPI](https://fastapi.tiangolo.com/). It has a bit of tech debt but it has been able to serve tens of clients on it's life.

We do not have, however, a nice way of letting clients interact with it. FastAPI, by default, provides a [Swagger](https://swagger.io/) integration. This is how our clients interact with the API, which is not great in terms of UX.

So, we decided it is about time that we create an admin UI to make our clients' lives easier.

We are going to build it using [SvelteKit](https://kit.svelte.dev/) as UI framework.

# Requirements

We want to have the following features:

- User authentication
- Head creation
  - Choosing head behavior (will change steps needed to deploy a head)
  - Video upload (optional, for custom videos)
  - Head deployment
- Head editing
  - We let the users edit anything from the head. They can also choose to turn its public availability on/off.
- Conversation creation (we use [openai](https://openai.com/) to summarize and create a question answering bot about any topic)
  - File upload
  - Manual file editing
- Support page
- Pricing page
- Theming (dark/light mode)

In terms of code quality, we want the following:
  
- Type safety
- Linter
- Code formatter
- Testing (browser and unit)

We are going to use [pnpm](https://pnpm.io/) as package manager.

# Setup

Following sveltekit blog, we run:

```shell
pnpm create svelte@latest admin-ui
cd admin-ui
pnpm i
git init && git add -A && git commit -m "Initial commit"
pnpm dev
```
When running the first command, we choose the following:

```
create-svelte version 3.1.0

┌  Welcome to SvelteKit!
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options
│  Add ESLint for code linting, Add Prettier for code formatting, Add Playwright for browser testing, Add Vitest for unit testing
│
└  Your project is ready!
```

# Routing

Now that everything is running, it is time to decide how is the code going to look like. 

Svelte uses filesystem-based routing. This means that the structure of our project will determine the URLs that the user will have access to. Any directory under `src/routes` will be converted to a route.

This is very useful for having sub-routes as well, just by nesting a directory into another.

```
admin-ui % tree src/routes 
src/routes
├── auth
│   ├── login
│   └── register
├── head
│   ├── create
│   │   └── [head_id]
│   │       ├── conversation
│   │       ├── deploy
│   │       ├── objective
│   │       └── visuals
│   ├── dashboard
│   ├── delete
│   │   └── [head_id]
│   └── edit
│       └── [head_id]
│           ├── conversation
│           ├── deploy
│           ├── objective
│           └── visuals
├── pricing
└── support
```

Note the `[head_id]` directories. These are dynamic. It means that we can load any route that is head-dependant adding the head ID to the url.

A url can look like `/head/edit/1/conversation` Which means that we are in a page intended to edit the conversation of the head with id of 1.

This skeleton can change over time. If the business requirements change, we can update our site by moving the directories around.

# Sharing components

We want to have a header present in all views of the application. To do so, we will write a header component, which we will import in a special file `src/routes/+layout.svelte`

First, lets create the component. We are going to place it under `src/lib/components/Header.svelte`.
**Note**: svelte components start with an uppercase letter.

Inside this component, we are going to write something very simple:

```svelte
<header>
    <a href="/head/dashboard">Dashboard</a>
    <a href="/support">Support</a>
    <a href="/pricing">Pricing</a>
</header>
```

To use this across all our application, let's import it on our `src/routes/+layout.svelte` file:

```svelte
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
```

It is important that we use the lib directory as svelteKit supports import prefixes from there, this is why we can do `$lib/components` imports across all our files, instead of navigating to it explicitly `../../../lib/components` from deeply nested routes.

It's not mandatory to use `lib` but it is there by default. Importing files using aliases from other directories requires some configuration.

## TODO

- scss
  - copy mockup style
  - theming (light/dark)
- layout views
  - from mockup
- api integration
  - auth
  - read
  - create
  - edit
  - delete
- misc
  - local storage
    - theme