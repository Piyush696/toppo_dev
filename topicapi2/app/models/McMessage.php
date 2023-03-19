<?php

class McMessage extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $mcMessage_id;

    /**
     *
     * @var integer
     */
    public $mcSubject_id;

    /**
     *
     * @var integer
     */
    public $replyingto_mcMessage_id;

    /**
     *
     * @var integer
     */
    public $sender_user_id;

    /**
     *
     * @var integer
     */
    public $receiver_user_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("mc-message");
        $this->hasMany('mc-message_id', 'HMessagecenter', 'mc-message_id', ['alias' => 'HMessagecenter']);
        $this->belongsTo('mc-subject_id', 'Mc-subject', 'mc-subject_id', ['alias' => 'McSubject']);
        $this->belongsTo('receiver_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('sender_user_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'mc-message';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return McMessage[]|McMessage|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return McMessage|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
