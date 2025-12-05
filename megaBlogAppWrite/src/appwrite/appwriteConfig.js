import config from '../config/config'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            const post = await this.databases.createDocument(
                config.appwriteDatabaseID, 
                config.appwriteCollectionID, 
                ID.unique(), 
                {title, slug, content, featuredImage, status, userId}
            );
            return post;
        }catch(error){
            console.log("Error creating post:", error);
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseID, 
                config.appwriteCollectionID, 
                [Query.equal("slug", slug)]
            );
            
            if(posts.total > 0){
                const postId = posts.documents[0].$id;
                const updatedPost = await this.databases.updateDocument(
                    config.appwriteDatabaseID, 
                    config.appwriteCollectionID, 
                    postId, 
                    {title, content, featuredImage, status}
                );
                return updatedPost;
            }else{
                throw new Error("Post not found");
            }
        }catch(error){
            console.log("Error updating post:", error);
            throw error;
        }
    }

    async deletePost(slug){
        try{
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseID, 
                config.appwriteCollectionID, 
                [Query.equal("slug", slug)]
            );
            
            if(posts.total > 0){
                const postId = posts.documents[0].$id;
                const deletedPost = await this.databases.deleteDocument(
                    config.appwriteDatabaseID, 
                    config.appwriteCollectionID, 
                    postId
                );
                return deletedPost;
            }else{
                throw new Error("Post not found");
            }
        }catch(error){
            console.log("Error deleting post:", error);
            throw error;
        }
    }

    // FIXED: Changed from getDocuments to listDocuments with query
    async getPost(slug){
        try{
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseID, 
                config.appwriteCollectionID, 
                [Query.equal("slug", slug)]
            );
            
            if(posts.total > 0){
                return posts.documents[0];
            }else{
                throw new Error("Post not found");
            }
        }catch(error){
            console.log("Error getting post:", error);
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseID, 
                config.appwriteCollectionID, 
                queries
            );
            return posts;
        }catch(error){
            console.log("Error getting posts:", error);
            throw error;
        }   
    }

    async uploadFile(file){
        try{
            const uploadedFile = await this.bucket.createFile(
                config.appwriteBucketID, 
                ID.unique(), 
                file
            );
            return uploadedFile;
        }catch(error){
            console.log("Error uploading file:", error);
            throw error;
        }
    }

    async deleteFile(fileId){
        try{
            const deletedFile = await this.bucket.deleteFile(
                config.appwriteBucketID, 
                fileId
            );
            return deletedFile;
        }catch(error){
            console.log("Error deleting file:", error);
            throw error;
        }
    }

    getFilePreview(fileId){
        try{
            return this.bucket.getFilePreview(config.appwriteBucketID, fileId);
        }catch(error){
            console.log("Error getting file preview:", error);
            throw error;
        }
    }
}

const service = new Service();
export default service;