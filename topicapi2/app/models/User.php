<?php
namespace App\Models;
class User extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var string
     */
    public $utc;

    /**
     *
     * @var string
     */
    public $username;

    /**
     *
     * @var string
     */
    public $handle;

    /**
     *
     * @var integer
     */
    public $zip_id;

    /**
     *
     * @var string
     */
    public $country_id;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     *
     * @var string
     */
    public $datetimemodified;

    /**
     *
     * @var string
     */
    public $trustlevel;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("user");
        $this->hasMany('user_id', 'Company', 'user_id', ['alias' => 'Company']);
        $this->hasMany('user_id', 'Creditcard', 'user_id', ['alias' => 'Creditcard']);
        $this->hasMany('user_id', 'Ctt', 'user_id', ['alias' => 'Ctt']);
        $this->hasMany('user_id', 'Event', 'user_id', ['alias' => 'Event']);
        $this->hasMany('user_id', 'EventUser', 'user_id', ['alias' => 'EventUser']);
        $this->hasMany('user_id', 'Eventsubmission', 'approver_user_id', ['alias' => 'Eventsubmission']);
        $this->hasMany('user_id', 'Eventsubmission', 'submitter_user_id', ['alias' => 'Eventsubmission']);
        $this->hasMany('user_id', 'HEventoccurrencedetail', 'user_id', ['alias' => 'HEventoccurrencedetail']);
        $this->hasMany('user_id', 'HLogin', 'user_id', ['alias' => 'HLogin']);
        $this->hasMany('user_id', 'HTopicapplication', 'user_id', ['alias' => 'HTopicapplication']);
        $this->hasMany('user_id', 'McMessage', 'receiver_user_id', ['alias' => 'McMessage']);
        $this->hasMany('user_id', 'McMessage', 'sender_user_id', ['alias' => 'McMessage']);
        $this->hasMany('user_id', 'McParticipant', 'participant_user_id', ['alias' => 'McParticipant']);
        $this->hasMany('user_id', 'Message', 'receiver_user_id', ['alias' => 'Message']);
        $this->hasMany('user_id', 'Message', 'sender_user_id', ['alias' => 'Message']);
        $this->hasMany('user_id', 'Slot', 'user_id', ['alias' => 'Slot']);
        $this->hasMany('user_id', 'Slotbooking', 'booking_user_id', ['alias' => 'Slotbooking']);
        $this->hasMany('user_id', 'Slotbooking', 'removing_user_id', ['alias' => 'Slotbooking']);
        $this->hasMany('user_id', 'SubCalendar', 'approver_user_id', ['alias' => 'SubCalendar']);
        $this->hasMany('user_id', 'SubCalendar', 'submitter_user_id', ['alias' => 'SubCalendar']);
        $this->hasMany('user_id', 'SubFaq', 'approver_user_id', ['alias' => 'SubFaq']);
        $this->hasMany('user_id', 'SubFaq', 'submitter_user_id', ['alias' => 'SubFaq']);
        $this->hasMany('user_id', 'SubLink', 'approver_user_id', ['alias' => 'SubLink']);
        $this->hasMany('user_id', 'SubLink', 'submitter_user_id', ['alias' => 'SubLink']);
        $this->hasMany('user_id', 'SubSynonym', 'approver_user_id', ['alias' => 'SubSynonym']);
        $this->hasMany('user_id', 'SubSynonym', 'submitter_user_id', ['alias' => 'SubSynonym']);
        $this->hasMany('user_id', 'SubTag', 'approver_user_id', ['alias' => 'SubTag']);
        $this->hasMany('user_id', 'SubTag', 'submitter_user_id', ['alias' => 'SubTag']);
        $this->hasMany('user_id', 'TCredit', 'recipient_user_id', ['alias' => 'TCredit']);
        $this->hasMany('user_id', 'TabBlogChild', 'approver_user_id', ['alias' => 'TabBlogChild']);
        $this->hasMany('user_id', 'TabBlogChild', 'creator_user_id', ['alias' => 'TabBlogChild']);
        $this->hasMany('user_id', 'TabBlogMain', 'admin_user_id', ['alias' => 'TabBlogMain']);
        $this->hasMany('user_id', 'TabBlogMain', 'creator_user_id', ['alias' => 'TabBlogMain']);
        $this->hasMany('user_id', 'TabFinderBook', 'admin_user_id', ['alias' => 'TabFinderBook']);
        $this->hasMany('user_id', 'TabFinderBook', 'creator_user_id', ['alias' => 'TabFinderBook']);
        $this->hasMany('user_id', 'TabFinderMain', 'admin_user_id', ['alias' => 'TabFinderMain']);
        $this->hasMany('user_id', 'TabFinderMain', 'creator_user_id', ['alias' => 'TabFinderMain']);
        $this->hasMany('user_id', 'TabFinderWeb', 'admin_user_id', ['alias' => 'TabFinderWeb']);
        $this->hasMany('user_id', 'TabFinderWeb', 'creator_user_id', ['alias' => 'TabFinderWeb']);
        $this->hasMany('user_id', 'TabGuide', 'admin_user_id', ['alias' => 'TabGuide']);
        $this->hasMany('user_id', 'TabGuide', 'creator_user_id', ['alias' => 'TabGuide']);
        $this->hasMany('user_id', 'TabHome', 'admin_user_id', ['alias' => 'TabHome']);
        $this->hasMany('user_id', 'TabHome', 'creator_user_id', ['alias' => 'TabHome']);
        $this->hasMany('user_id', 'TabLearnChild', 'creator_user_id', ['alias' => 'TabLearnChild']);
        $this->hasMany('user_id', 'TabLearnChild', 'modifier_user_id', ['alias' => 'TabLearnChild']);
        $this->hasMany('user_id', 'TabLearnMain', 'creator_user_id', ['alias' => 'TabLearnMain']);
        $this->hasMany('user_id', 'TabLearnMain', 'modifier_user_id', ['alias' => 'TabLearnMain']);
        $this->hasMany('user_id', 'Tabstrip', 'creator_user_id', ['alias' => 'Tabstrip']);
        $this->hasMany('user_id', 'Tabstrip', 'modifier_user_id', ['alias' => 'Tabstrip']);
        $this->hasMany('user_id', 'Tag', 'admin_user_id', ['alias' => 'Tag']);
        $this->hasMany('user_id', 'TopicTab', 'modifiedby', ['alias' => 'TopicTab']);
        $this->hasMany('user_id', 'TopicTab', 'user_id', ['alias' => 'TopicTab']);
        $this->hasMany('user_id', 'Topicapplication', 'user_id', ['alias' => 'Topicapplication']);
        $this->hasMany('user_id', 'Topiccomment', 'user_id', ['alias' => 'Topiccomment']);
        $this->hasMany('user_id', 'Topiclink', 'user_id', ['alias' => 'Topiclink']);
        $this->hasMany('user_id', 'Topicrating', 'user_id', ['alias' => 'Topicrating']);
        $this->hasMany('user_id', 'Topicrelationship', 'user_id', ['alias' => 'Topicrelationship']);
        $this->hasMany('user_id', 'Topicrelationship', 'user_topic_id', ['alias' => 'Topicrelationship']);
        $this->hasMany('user_id', 'Transaction', 'userfrom_id', ['alias' => 'Transaction']);
        $this->hasMany('user_id', 'Transaction', 'userto_id', ['alias' => 'Transaction']);
        $this->hasManyToMany('user_id', 'App\Models\UserRoleTopic', 'user_id','role_id','App\Models\Role', ['alias' => 'UserRoleTopic']);
        $this->hasMany('user_id', 'UserTermsandconditions', 'user_id', ['alias' => 'UserTermsandconditions']);
        $this->hasMany('user_id', 'UserTopic', 'user_id', ['alias' => 'UserTopic']);
        $this->belongsTo('country_id', 'Country', 'country_id', ['alias' => 'Country']);
        $this->belongsTo('zip_id', 'Zipcode', 'zipcode_id', ['alias' => 'Zipcode']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'user';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return User[]|User|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return User|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
