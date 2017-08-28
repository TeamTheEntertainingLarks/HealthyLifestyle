import { MapsAPILoader, LazyMapsAPILoaderConfigLiteral, AgmCoreModule } from '@agm/core';
import { ModuleWithProviders } from '@angular/core';

export class AgmCoreOverrideModule {
    static forRoot(lazyMapsAPILoaderConfig?: LazyMapsAPILoaderConfigLiteral): ModuleWithProviders {
        const module = AgmCoreModule.forRoot(lazyMapsAPILoaderConfig);
        const provider: any = module.providers[2];
        provider.useClass = IgnoreIncludingApiLoader;

        return module;
    }
}

export class IgnoreIncludingApiLoader extends MapsAPILoader {
    load(): Promise<void> {
        return Promise.resolve();
    }
}
