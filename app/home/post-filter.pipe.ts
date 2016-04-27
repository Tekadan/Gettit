import { Pipe, PipeTransform } from 'angular2/core';
import { IPost } from './post';

@Pipe({
    name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {
    transform(value: IPost[], args: string[]): IPost[]{
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((post: IPost) => 
            post.title.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}