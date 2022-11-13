'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">campuss-mall documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-03c97e93d9f0faa73e082c9d4465f3299f377a10e1be41d03af80fc43b9acc4254d092a737dcbd477a3b7c43ccecf7cc45ebc369ae32aa16d5e2470836bfdaff"' : 'data-target="#xs-controllers-links-module-AppModule-03c97e93d9f0faa73e082c9d4465f3299f377a10e1be41d03af80fc43b9acc4254d092a737dcbd477a3b7c43ccecf7cc45ebc369ae32aa16d5e2470836bfdaff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-03c97e93d9f0faa73e082c9d4465f3299f377a10e1be41d03af80fc43b9acc4254d092a737dcbd477a3b7c43ccecf7cc45ebc369ae32aa16d5e2470836bfdaff"' :
                                            'id="xs-controllers-links-module-AppModule-03c97e93d9f0faa73e082c9d4465f3299f377a10e1be41d03af80fc43b9acc4254d092a737dcbd477a3b7c43ccecf7cc45ebc369ae32aa16d5e2470836bfdaff"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-03c97e93d9f0faa73e082c9d4465f3299f377a10e1be41d03af80fc43b9acc4254d092a737dcbd477a3b7c43ccecf7cc45ebc369ae32aa16d5e2470836bfdaff"' : 'data-target="#xs-injectables-links-module-AppModule-03c97e93d9f0faa73e082c9d4465f3299f377a10e1be41d03af80fc43b9acc4254d092a737dcbd477a3b7c43ccecf7cc45ebc369ae32aa16d5e2470836bfdaff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-03c97e93d9f0faa73e082c9d4465f3299f377a10e1be41d03af80fc43b9acc4254d092a737dcbd477a3b7c43ccecf7cc45ebc369ae32aa16d5e2470836bfdaff"' :
                                        'id="xs-injectables-links-module-AppModule-03c97e93d9f0faa73e082c9d4465f3299f377a10e1be41d03af80fc43b9acc4254d092a737dcbd477a3b7c43ccecf7cc45ebc369ae32aa16d5e2470836bfdaff"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-3d17de2ae6bc8aac662746ef1d58e074e2af9de805ec8932b8bc932850cbc10a484cbf5742fa2ee237d8ace50c58484d1e44b7b7a28e80e007e17d4a932a1b51"' : 'data-target="#xs-controllers-links-module-AuthModule-3d17de2ae6bc8aac662746ef1d58e074e2af9de805ec8932b8bc932850cbc10a484cbf5742fa2ee237d8ace50c58484d1e44b7b7a28e80e007e17d4a932a1b51"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-3d17de2ae6bc8aac662746ef1d58e074e2af9de805ec8932b8bc932850cbc10a484cbf5742fa2ee237d8ace50c58484d1e44b7b7a28e80e007e17d4a932a1b51"' :
                                            'id="xs-controllers-links-module-AuthModule-3d17de2ae6bc8aac662746ef1d58e074e2af9de805ec8932b8bc932850cbc10a484cbf5742fa2ee237d8ace50c58484d1e44b7b7a28e80e007e17d4a932a1b51"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-3d17de2ae6bc8aac662746ef1d58e074e2af9de805ec8932b8bc932850cbc10a484cbf5742fa2ee237d8ace50c58484d1e44b7b7a28e80e007e17d4a932a1b51"' : 'data-target="#xs-injectables-links-module-AuthModule-3d17de2ae6bc8aac662746ef1d58e074e2af9de805ec8932b8bc932850cbc10a484cbf5742fa2ee237d8ace50c58484d1e44b7b7a28e80e007e17d4a932a1b51"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-3d17de2ae6bc8aac662746ef1d58e074e2af9de805ec8932b8bc932850cbc10a484cbf5742fa2ee237d8ace50c58484d1e44b7b7a28e80e007e17d4a932a1b51"' :
                                        'id="xs-injectables-links-module-AuthModule-3d17de2ae6bc8aac662746ef1d58e074e2af9de805ec8932b8bc932850cbc10a484cbf5742fa2ee237d8ace50c58484d1e44b7b7a28e80e007e17d4a932a1b51"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CartModule-7a442beb3e2c9a1bb476cc8a343c287ebea77ac5e9eedd844cf27bb6d022196b05db5c7c66686a3dae6a3bae305050e45f9619ddb7e89e4db055d3a62a6be171"' : 'data-target="#xs-controllers-links-module-CartModule-7a442beb3e2c9a1bb476cc8a343c287ebea77ac5e9eedd844cf27bb6d022196b05db5c7c66686a3dae6a3bae305050e45f9619ddb7e89e4db055d3a62a6be171"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartModule-7a442beb3e2c9a1bb476cc8a343c287ebea77ac5e9eedd844cf27bb6d022196b05db5c7c66686a3dae6a3bae305050e45f9619ddb7e89e4db055d3a62a6be171"' :
                                            'id="xs-controllers-links-module-CartModule-7a442beb3e2c9a1bb476cc8a343c287ebea77ac5e9eedd844cf27bb6d022196b05db5c7c66686a3dae6a3bae305050e45f9619ddb7e89e4db055d3a62a6be171"' }>
                                            <li class="link">
                                                <a href="controllers/CartController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartModule-7a442beb3e2c9a1bb476cc8a343c287ebea77ac5e9eedd844cf27bb6d022196b05db5c7c66686a3dae6a3bae305050e45f9619ddb7e89e4db055d3a62a6be171"' : 'data-target="#xs-injectables-links-module-CartModule-7a442beb3e2c9a1bb476cc8a343c287ebea77ac5e9eedd844cf27bb6d022196b05db5c7c66686a3dae6a3bae305050e45f9619ddb7e89e4db055d3a62a6be171"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-7a442beb3e2c9a1bb476cc8a343c287ebea77ac5e9eedd844cf27bb6d022196b05db5c7c66686a3dae6a3bae305050e45f9619ddb7e89e4db055d3a62a6be171"' :
                                        'id="xs-injectables-links-module-CartModule-7a442beb3e2c9a1bb476cc8a343c287ebea77ac5e9eedd844cf27bb6d022196b05db5c7c66686a3dae6a3bae305050e45f9619ddb7e89e4db055d3a62a6be171"' }>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-9eb22bceb5c36a25f314fa68afc899abef08f74decdf088d25960b9123ec9abad381042f23bd34edaa10150a9a529f6171af1f006455ae51056162ae86e0dd87"' : 'data-target="#xs-controllers-links-module-ProductModule-9eb22bceb5c36a25f314fa68afc899abef08f74decdf088d25960b9123ec9abad381042f23bd34edaa10150a9a529f6171af1f006455ae51056162ae86e0dd87"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-9eb22bceb5c36a25f314fa68afc899abef08f74decdf088d25960b9123ec9abad381042f23bd34edaa10150a9a529f6171af1f006455ae51056162ae86e0dd87"' :
                                            'id="xs-controllers-links-module-ProductModule-9eb22bceb5c36a25f314fa68afc899abef08f74decdf088d25960b9123ec9abad381042f23bd34edaa10150a9a529f6171af1f006455ae51056162ae86e0dd87"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-9eb22bceb5c36a25f314fa68afc899abef08f74decdf088d25960b9123ec9abad381042f23bd34edaa10150a9a529f6171af1f006455ae51056162ae86e0dd87"' : 'data-target="#xs-injectables-links-module-ProductModule-9eb22bceb5c36a25f314fa68afc899abef08f74decdf088d25960b9123ec9abad381042f23bd34edaa10150a9a529f6171af1f006455ae51056162ae86e0dd87"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-9eb22bceb5c36a25f314fa68afc899abef08f74decdf088d25960b9123ec9abad381042f23bd34edaa10150a9a529f6171af1f006455ae51056162ae86e0dd87"' :
                                        'id="xs-injectables-links-module-ProductModule-9eb22bceb5c36a25f314fa68afc899abef08f74decdf088d25960b9123ec9abad381042f23bd34edaa10150a9a529f6171af1f006455ae51056162ae86e0dd87"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-8361fc93ba35ee9ddfb956c4f3b811f84a711fecf898b0e4d13026ba8f80dd9f19ad6dec2b79c0c38287d37eed2386c7108f2fb6957a80c262fea41dea347d85"' : 'data-target="#xs-controllers-links-module-UserModule-8361fc93ba35ee9ddfb956c4f3b811f84a711fecf898b0e4d13026ba8f80dd9f19ad6dec2b79c0c38287d37eed2386c7108f2fb6957a80c262fea41dea347d85"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-8361fc93ba35ee9ddfb956c4f3b811f84a711fecf898b0e4d13026ba8f80dd9f19ad6dec2b79c0c38287d37eed2386c7108f2fb6957a80c262fea41dea347d85"' :
                                            'id="xs-controllers-links-module-UserModule-8361fc93ba35ee9ddfb956c4f3b811f84a711fecf898b0e4d13026ba8f80dd9f19ad6dec2b79c0c38287d37eed2386c7108f2fb6957a80c262fea41dea347d85"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-8361fc93ba35ee9ddfb956c4f3b811f84a711fecf898b0e4d13026ba8f80dd9f19ad6dec2b79c0c38287d37eed2386c7108f2fb6957a80c262fea41dea347d85"' : 'data-target="#xs-injectables-links-module-UserModule-8361fc93ba35ee9ddfb956c4f3b811f84a711fecf898b0e4d13026ba8f80dd9f19ad6dec2b79c0c38287d37eed2386c7108f2fb6957a80c262fea41dea347d85"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-8361fc93ba35ee9ddfb956c4f3b811f84a711fecf898b0e4d13026ba8f80dd9f19ad6dec2b79c0c38287d37eed2386c7108f2fb6957a80c262fea41dea347d85"' :
                                        'id="xs-injectables-links-module-UserModule-8361fc93ba35ee9ddfb956c4f3b811f84a711fecf898b0e4d13026ba8f80dd9f19ad6dec2b79c0c38287d37eed2386c7108f2fb6957a80c262fea41dea347d85"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CartController.html" data-type="entity-link" >CartController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDTO.html" data-type="entity-link" >CreateProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterProductDTO.html" data-type="entity-link" >FilterProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Item.html" data-type="entity-link" >Item</a>
                            </li>
                            <li class="link">
                                <a href="classes/ItemDTO.html" data-type="entity-link" >ItemDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});