<h1 align="center">cz-relax</h1>

<p align="center">
  <a target="_blank" href="http://commitizen.github.io/cz-cli/">
      <img style="display:inline-block;margin:0.2em;" alt="commitizen-friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?logo=github">
    </a>
</p>

<h4 align="center">A better commitizen practice And one-click to configured commitizen.<h4>
<h4 align="center"><a target="_blank" href="https://github.com/qiqihaobenben/commitizen-relax/blob/release/docs/zh.md">中文文档</a><h4>

## Introduction

It takes several steps to configure [commitizen](https://github.com/commitizen/cz-cli) before，for example, commitizen needs to be initialized first and choice commitizen adapter，then you need to install commitlint，finally, you may need husky to configure git hooks。

Now, it only takes two steps to finish the above work and make everything easier.

## Getting started

### 1. Install cz-relax in the workspace

```sh
npm install cz-relax --save-dev
```

### 2. Initialize

```sh
npx cz-relax init
```

If you are using chinese：

```sh
npx cz-relax init --language zh
```

It's simple,then you can perform normal `git commit`.At this time, commitizen takes effect.

## Usage

Usage: `cz-relax [options]`

### Options:

- `-V, --version`: output the version number
- `-f, --force`: For commitizen while a previous adapter and husky is already configured. Use --force to override
- `-l, --language <type>`: need to set a profile type (choices: "zh", "en", default: "zh")
- `-a, --adapter <npmName>`: need to set a adapter npm name (default: "cz-git")
- `-h, --help`: display help for command

### Example

Example call:

```sh
  $ cz-relax init
  $ cz-relax init --force
  $ cz-relax init --language zh
  $ cz-relax init --language en --force
  $ cz-relax init --language zh --force --adapter cz-conventional-changelog
```

## FAQ

### Why is it prompted to use `--force` during initialize?

For commitizen while a previous adapter and husky is already configured. Use --force to override. For example:

```
npx cz-relax init --force
```

### Why report an error: `Error: no test specified` ?

Because, husky initialized by `husky-init`, it add pre-commit sample: `set('.husky/pre-commit', 'npm test')`. If you have a `test` command in `package.json`，please check how `test` work.

### Only support npm?

Yeah, yarn are not support at this time. I will improve it in the furture.

### What commitizen adapter is used default for initialization?

The cz-relax default adapter used fro initialize is [cz-git](https://github.com/Zhengqbbb/cz-git).

You can also use other adapters, for example, `cz-conventional-changelog`. However, you need to create your own configuration file for commitizen. I will improve it in the furture.
