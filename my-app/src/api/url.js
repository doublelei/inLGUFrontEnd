const baseURL = '10.30.176.243:5000/api/v1'

const URL ={
    //ACCOUNTS ------------------------------------------------
    get_account_info: baseURL + baseURL + '/accounts/<string:id>',

    get_accounts: baseURL + '/accounts',

    verify_credential: baseURL + '/accounts/verify_credentials',

    update_credential: baseURL + '/accounts/update_credentials',

    get_followers: baseURL + '/accounts/<string:id>/followers',

    get_following: baseURL + '/accounts/<string:id>/following',

    get_statuses: baseURL + '/accounts/<string:id>/statuses',

    follow: baseURL + '/accounts/<string:id>/follow',

    unfollow: baseURL + '/accounts/<string:id>/unfollow',

    get_relationship: baseURL + '/accounts/relationships',

    account_search: baseURL + '/accounts/search',

    get_avatar: baseURL + '/avatars/<path:filename>',

    // ATTACHMENT ------------------------------------------------
    get_status_file: baseURL + '/attachments/<path:filename>',

    attach_status_file: baseURL + '/attachments/add',

    // COLLECT ------------------------------------------------
    get_collections: baseURL + '/collections',
    /*
    Statuses the user has collected.
    :return: List of Statuses.
    */
    collects: baseURL + '/statuses/<string:id>/collect',
    /*
    Collect a status.
    :param id: status id.
    :return: Status.
    */
    uncollects: baseURL + '/statuses/<string:id>/uncollect',

    // POLLS ------------------------------------------------
    get_polls: baseURL + '/polls/<string:id>',
    /*
    :param id: Given poll's id.
    :return: Poll.
    */

    vote_poll: baseURL + '/polls/<string:id>/votes',
    /*
    Vote on a poll.
    :param id: Given poll's id.
    :return: Poll.
    */

    export_poll: baseURL + '/polls/<string:id>/export',
    /*
    Export a poll result.
    :param id:
    :return:
    */

    // STATUS ------------------------------------------------
    get_status: baseURL + '/statuses/<string:id>',
    /*
    Get status object.
    :param id: given status' id.
    :return: Status.
    */

    get_status_context: baseURL + '/statuses/<string:id>/context',
    /*
    What the status replies to, and replies to it.
    :param id: given status' id.
    :return: {  "ancestors": Status,
                "descendants": List of Statuses
                }
    */

    // TAGS ------------------------------------------------
    get_tag: baseURL + '/tags/<string:name>',
    /*
    Get information of this tag.
    :param name: tag's name.
    :return: Tag.
    */

    tag_status: baseURL + '/statuses/<string:id>/tag/new',
    /*
    Tag a given status.
    :param id: status id.
    :return: Status.
    */

    remove_tag_status: baseURL + '/status/<string:id>/tag/remove',
    /*
    Remove a tag from the given status.
    :param id: status id.
    :return: Status.
    */
}

export default URL