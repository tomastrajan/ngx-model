# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.1.0"></a>
# [5.1.0](https://github.com/tomastrajan/ngx-model/compare/v5.0.0...v5.1.0) (2018-02-10)


### Features

* **docs:** add getting started with schematics ([945238c](https://github.com/tomastrajan/ngx-model/commit/945238c))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/tomastrajan/ngx-model/compare/v4.0.0...v5.0.0) (2017-11-06)


### Bug Fixes

* **build:** distribute as compiled javascript instead of typescript sources ([12627a4](https://github.com/tomastrajan/ngx-model/commit/12627a4)), closes [#3](https://github.com/tomastrajan/ngx-model/issues/3)


### BREAKING CHANGES

* **build:** Use ng-packagr to generate UMD, FESM5 and FESM2015 bundles and distribute them instead of original typescript sources. This is necessary since Angular CLI 1.5 correctly doesn't compile 3rd party libraries anymore.



<a name="4.0.0"></a>
# [4.0.0](https://github.com/tomastrajan/ngx-model/compare/v3.1.0...v4.0.0) (2017-10-28)


### Features

* **rxjs:** use lettable operators instead of monkey patching of observable prototype ([2989a91](https://github.com/tomastrajan/ngx-model/commit/2989a91))


### BREAKING CHANGES

* **rxjs:** can break applications (very low probability) which use map operator without importing it by themselves thus depending on the ngx-model map operator import, require rxjs 5.5.0 or higher



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
