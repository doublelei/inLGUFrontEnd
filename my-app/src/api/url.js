const basicURL = '10.30.176.243:5000/api/v1'

const URL = {
    //ACCOUNTS ------------------------------------------------
    get_account_info: basicURL + '/accounts/<string:id>',

    get_accounts: basicURL + '/accounts',

    verify_credential: basicURL + '/accounts/verify_credentials',

    update_credential: basicURL + '/accounts/update_credentials',

    get_followers: basicURL + '/accounts/<string:id>/followers',

    get_following: 'basicURL/accounts/c431dc96-114b-4fcc-9765-2e2678334685/following',

    get_statuses: basicURL + '/accounts/<string:id>/statuses',

    follow: basicURL + '/accounts/${id}/follow',

    unfollow: basicURL + '/accounts/<string:id>/unfollow',

    get_relationship: basicURL + '/accounts/relationships',

    account_search: basicURL + '/accounts/search',

    get_avatar: basicURL + '/avatars/<path:filename>',

    // ATTACHMENT ------------------------------------------------
    get_status_file: basicURL + '/attachments/<path:filename>',

    attach_status_file: basicURL + '/attachments/add',

    // COLLECT ------------------------------------------------
    get_collections: basicURL + '/collections',
    /*
    Statuses the user has collected.
    :return: List of Statuses.
    */
    collects: basicURL + '/statuses/<string:id>/collect',
    /*
    Collect a status.
    :param id: status id.
    :return: Status.
    */
    uncollects: basicURL + '/statuses/<string:id>/uncollect',

    // POLLS ------------------------------------------------
    get_polls: basicURL + '/polls/<string:id>',
    /*
    :param id: Given poll's id.
    :return: Poll.
    */

    vote_poll: basicURL + '/polls/<string:id>/votes',
    /*
    Vote on a poll.
    :param id: Given poll's id.
    :return: Poll.
    */

    export_poll: basicURL + '/polls/<string:id>/export',
    /*
    Export a poll result.
    :param id:
    :return:
    */

    // STATUS ------------------------------------------------
    get_status: basicURL + '/statuses/<string:id>',
    /*
    Get status object.
    :param id: given status' id.
    :return: Status.
    */

    get_status_context: basicURL + '/statuses/<string:id>/context',
    /*
    What the status replies to, and replies to it.
    :param id: given status' id.
    :return: {  "ancestors": Status,
                "descendants": List of Statuses
                }
    */

    // TAGS ------------------------------------------------
    get_tag: basicURL + '/tags/<string:name>',
    /*
    Get information of this tag.
    :param name: tag's name.
    :return: Tag.
    */

    tag_status: basicURL + '/statuses/<string:id>/tag/new',
    /*
    Tag a given status.
    :param id: status id.
    :return: Status.
    */

    remove_tag_status: basicURL + '/status/<string:id>/tag/remove',
    /*
    Remove a tag from the given status.
    :param id: status id.
    :return: Status.
    */
}

export default URL