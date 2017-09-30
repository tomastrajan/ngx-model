# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.1.0"></a>
# [3.1.0](https://github.com/tomastrajan/ngx-model/compare/v3.0.1...v3.1.0) (2017-09-30)


### Features

* **dependency:** support wider peerDependency version ranges (angular, rxjs) ([dbeb223](https://github.com/tomastrajan/ngx-model/commit/dbeb223))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/tomastrajan/ngx-model/compare/v3.0.0...v3.0.1) (2017-09-26)

### Docs

* **readme:** update documentation

<a name="3.0.0"></a>
# [3.0.0](https://github.com/tomastrajan/ngx-model/compare/v2.0.0...v3.0.0) (2017-09-25)


### Bug Fixes

* **types:** add missing type for function parameter (to work with noImplicitAny) ([a811708](https://github.com/tomastrajan/ngx-model/commit/a811708)), closes [#2](https://github.com/tomastrajan/ngx-model/issues/2)


### BREAKING CHANGES

* **types:** Should be frictionless update, will result in problems only in case it was used with custom `clone` function with different than expected type signature (highly unlikely)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/tomastrajan/ngx-model/compare/v1.0.1...v2.0.0) (2017-08-26)


### Bug Fixes

* **dependency:** multiple versions of rxjs in single project (TS90010) ([46a83cb](https://github.com/tomastrajan/ngx-model/commit/46a83cb)), closes [#1](https://github.com/tomastrajan/ngx-model/issues/1)


### BREAKING CHANGES

* **dependency:** rxjs is now peerDependency instead of dependency



<a name="1.0.1"></a>
## [1.0.1](https://github.com/tomastrajan/ngx-model/compare/v1.0.0...v1.0.1) (2017-07-20)


### Bug Fixes

* lint rules ([eefa8ea](https://github.com/tomastrajan/ngx-model/commit/eefa8ea))



<a name="1.0.0"></a>
# 1.0.0 (2017-07-20)


### Features

* model ([dd2b952](https://github.com/tomastrajan/ngx-model/commit/dd2b952))
