export interface IPost {
id: number;
title: string;
body: string;
like_count: number;
created_at: Date;
}
export interface IAuth {
    token: string;
}