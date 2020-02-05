import { Comunity } from './comunity';
import { Mobility } from './mobility';
import { Schedule } from './schedule';

export class Demand {
    private _id: string;
    private _idUser: string;
    private _subject: string;
    private _schedule: Schedule;
    private _mobility: Mobility;
    private _community: Comunity;
    private _title: string;
    private _level: string;


    constructor() {
    }


    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter idUser
     * @return {string}
     */
    public get idUser(): string {
        return this._idUser;
    }

    /**
     * Getter subject
     * @return {string}
     */
    public get subject(): string {
        return this._subject;
    }

    /**
     * Getter schedule
     * @return {Schedule}
     */
    public get schedule(): Schedule {
        return this._schedule;
    }

    /**
     * Getter mobility
     * @return {Mobility}
     */
    public get mobility(): Mobility {
        return this._mobility;
    }

    /**
     * Getter community
     * @return {Comunity}
     */
    public get community(): Comunity {
        return this._community;
    }

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter level
     * @return {string}
     */
    public get level(): string {
        return this._level;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter idUser
     * @param {string} value
     */
    public set idUser(value: string) {
        this._idUser = value;
    }

    /**
     * Setter subject
     * @param {string} value
     */
    public set subject(value: string) {
        this._subject = value;
    }

    /**
     * Setter schedule
     * @param {Schedule} value
     */
    public set schedule(value: Schedule) {
        this._schedule = value;
    }

    /**
     * Setter mobility
     * @param {Mobility} value
     */
    public set mobility(value: Mobility) {
        this._mobility = value;
    }

    /**
     * Setter community
     * @param {Comunity} value
     */
    public set community(value: Comunity) {
        this._community = value;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter level
     * @param {string} value
     */
    public set level(value: string) {
        this._level = value;
    }



}
