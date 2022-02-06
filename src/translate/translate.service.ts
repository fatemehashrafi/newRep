import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
export enum TranslateFieldsEnum {
    Banner="Banner",
}

const fa ={
    [TranslateFieldsEnum.Banner]:"دیوار ویترین املاک شما ",
}

const en ={
    [TranslateFieldsEnum.Banner]:"Showcase wall of your property",
}

@Injectable({
    scope:Scope.REQUEST,
})
export class TranslateService {

    constructor(
        @Inject(REQUEST)
        private readonly request: Request){}
    
        
    async translate(field :TranslateFieldsEnum ){
        const language =await this.request.headers['accept_language'];
        switch (language) {
            case 'fa':
                return fa[field];
            case 'en':
                return en[field];
        }
    }
}
