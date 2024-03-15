export class Track {
    id:string;
    title_short:string;
    duration:string;
    preview:any;
    picture:string;
    release_date:string;

    constructor(id?:string, title_short?:string, duration?:string, preview?:string, picture?:string, release_date?:string){
        this.id = id;
        this.title_short = title_short;
        this.duration = duration;
        this.preview = preview;
        this.release_date = release_date;
    }
}
