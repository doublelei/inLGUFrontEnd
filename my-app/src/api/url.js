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
<<<<<<< HEAD
    collects: baseURL + '/statuses/<string:id>/collect',
=======
    collects: basicURL + '/statuses/<string:id>/collect',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    Collect a status.
    :param id: status id.
    :return: Status.
    */
<<<<<<< HEAD
    uncollects: baseURL + '/statuses/<string:id>/uncollect',

    // POLLS ------------------------------------------------
    get_polls: baseURL + '/polls/<string:id>',
=======
    uncollects: basicURL + '/statuses/<string:id>/uncollect',

    // POLLS ------------------------------------------------
    get_polls: basicURL + '/polls/<string:id>',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    :param id: Given poll's id.
    :return: Poll.
    */

<<<<<<< HEAD
    vote_poll: baseURL + '/polls/<string:id>/votes',
=======
    vote_poll: basicURL + '/polls/<string:id>/votes',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    Vote on a poll.
    :param id: Given poll's id.
    :return: Poll.
    */

<<<<<<< HEAD
    export_poll: baseURL + '/polls/<string:id>/export',
=======
    export_poll: basicURL + '/polls/<string:id>/export',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    Export a poll result.
    :param id:
    :return:
    */

    // STATUS ------------------------------------------------
<<<<<<< HEAD
    get_status: baseURL + '/statuses/<string:id>',
=======
    get_status: basicURL + '/statuses/<string:id>',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    Get status object.
    :param id: given status' id.
    :return: Status.
    */

<<<<<<< HEAD
    get_status_context: baseURL + '/statuses/<string:id>/context',
=======
    get_status_context: basicURL + '/statuses/<string:id>/context',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    What the status replies to, and replies to it.
    :param id: given status' id.
    :return: {  "ancestors": Status,
                "descendants": List of Statuses
                }
    */

    // TAGS ------------------------------------------------
<<<<<<< HEAD
    get_tag: baseURL + '/tags/<string:name>',
=======
    get_tag: basicURL + '/tags/<string:name>',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    Get information of this tag.
    :param name: tag's name.
    :return: Tag.
    */

<<<<<<< HEAD
    tag_status: baseURL + '/statuses/<string:id>/tag/new',
=======
    tag_status: basicURL + '/statuses/<string:id>/tag/new',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    Tag a given status.
    :param id: status id.
    :return: Status.
    */

<<<<<<< HEAD
    remove_tag_status: baseURL + '/status/<string:id>/tag/remove',
=======
    remove_tag_status: basicURL + '/status/<string:id>/tag/remove',
>>>>>>> f9fbbd24af3bb4390689755d44d463e696b227d8
    /*
    Remove a tag from the given status.
    :param id: status id.
    :return: Status.
    */
}

export default URL