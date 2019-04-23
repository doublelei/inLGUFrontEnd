const URL ={
    //ACCOUNTS ------------------------------------------------
    get_account_info: '/accounts/<string:id>',

    get_accounts: '/accounts',

    verify_credential: '/accounts/verify_credentials',

    update_credential: '/accounts/update_credentials',

    get_followers: '/accounts/<string:id>/followers',

    get_following: '/accounts/<string:id>/following',

    get_statuses: '/accounts/<string:id>/statuses',

    follow: '/accounts/<string:id>/follow',

    unfollow: '/accounts/<string:id>/unfollow',

    get_relationship: '/accounts/relationships',

    account_search: '/accounts/search',

    get_avatar: '/avatars/<path:filename>',

    // ATTACHMENT ------------------------------------------------
    get_status_file: '/attachments/<path:filename>',

    attach_status_file: '/attachments/add',

    // COLLECT ------------------------------------------------
    get_collections: '/collections',
    /*
    Statuses the user has collected.
    :return: List of Statuses.
    */
    collects: '/statuses/<string:id>/collect',
    /*
    Collect a status.
    :param id: status id.
    :return: Status.
    */
    uncollects: '/statuses/<string:id>/uncollect',

    // POLLS ------------------------------------------------
    get_polls: '/polls/<string:id>',
    /*
    :param id: Given poll's id.
    :return: Poll.
    */

    vote_poll: '/polls/<string:id>/votes',
    /*
    Vote on a poll.
    :param id: Given poll's id.
    :return: Poll.
    */

    export_poll: '/polls/<string:id>/export',
    /*
    Export a poll result.
    :param id:
    :return:
    */

    // STATUS ------------------------------------------------
    get_status: '/statuses/<string:id>',
    /*
    Get status object.
    :param id: given status' id.
    :return: Status.
    */

    get_status_context: '/statuses/<string:id>/context',
    /*
    What the status replies to, and replies to it.
    :param id: given status' id.
    :return: {  "ancestors": Status,
                "descendants": List of Statuses
                }
    */

    // TAGS ------------------------------------------------
    get_tag: '/tags/<string:name>',
    /*
    Get information of this tag.
    :param name: tag's name.
    :return: Tag.
    */

    tag_status: '/statuses/<string:id>/tag/new',
    /*
    Tag a given status.
    :param id: status id.
    :return: Status.
    */

    remove_tag_status: '/status/<string:id>/tag/remove',
    /*
    Remove a tag from the given status.
    :param id: status id.
    :return: Status.
    */
}

export default URL