import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../models/podcast-model';


const pathdata = path.join(__dirname, '../repositories/podcasts.json')
console.log("DudewTF"+pathdata)
export async function getAllPodcasts(podcastName?:string) : Promise<PodcastModel[]> {
    
    const data = fs.readFileSync(pathdata, 'utf8');
    let jsonFile = JSON.parse(data);
    
    if(podcastName)
        jsonFile = jsonFile.filter((podcast:PodcastModel) => podcast.PodcastName === podcastName)
    
        return jsonFile
}