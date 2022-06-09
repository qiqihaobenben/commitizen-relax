<h1 align="center">cz-relax</h1>

<h4 align="center">一键配置 commit 友好的仓库</h4>

## 介绍

之前配置 [commitizen](https://github.com/commitizen/cz-cli) 需要好几步，例如首先 commitizen 需要进行初始化并且选择 commitizen adapter，然后需要安装 commitlint ，最后可能还需要 husky 配置 git hooks。

现在，只需要两步，就可以完成上面的工作，让一切变得轻松起来。

## 开始

### 1. 在工作目录安装 cz-relax

```sh
npm install cz-relax --save-dev
// 或者
yarn add cz-relax --dev
```

### 2. 初始化

```sh
npx cz-relax init
```

如果你使用的是中文：

```sh
npx cz-relax init --language zh
```


如果你使用的是 yarn：

```sh
npx cz-relax init --yarn
```

完成上面两步，你就可以正常的使用 `git commit`了，此时 commitizen 就生效了。

## 使用

使用: `cz-relax [options]`

### Options:

- `-V, --version`: 输出版本号
- `-f, --force`: 如果 commitizen 发现之前已经设置过适配器和 husky 配置文件了，需要用 --force 覆盖
- `--yarn`: 使用 yarn 管理安装包
- `-l, --language <type>`: 需要设置的语言类型 (选项: "zh", "en", 默认: "zh")
- `-a, --adapter <npmName>`: 需要设置的适配器 (默认: "cz-git")
- `-h, --help`: display help for command

### 例子

```sh
  $ cz-relax init
  $ cz-relax init --force
  $ cz-relax init --yarn
  $ cz-relax init --language zh
  $ cz-relax init --language en --force
  $ cz-relax init --language zh --force --adapter cz-conventional-changelog
```

## FAQ

### 为什么初始化有时候会提示需要使用 --force?

如果 commitizen 发现之前已经设置过适配器和 husky 配置文件了，需要用 --force 覆盖，例如：

```
npx cz-relax init --force
```

### 为什么会报错：`Error: no test specified` ？

因为，husky 是用的 `husky-init` 初始化的，它添加了一个 `pre-commit` 的例子：`set('.husky/pre-commit', 'npm test')`。如果在你的`package.json`中有 test 命令，请查看一下 `test` 做了什么。


### 初始化默认使用的是什么 commitizen adapter?

cz-relax 初始化默认使用的 adapter 是 cz-git，

你也可以使用其他的适配器，例如 `cz-conventional-changelog` ，不过，你暂时需要自己配置以下 commitizen，后续会完善。
