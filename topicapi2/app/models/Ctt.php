<?php

class Ctt extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $ctt_id;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var integer
     */
    public $searchstring_id;

    /**
     *
     * @var string
     */
    public $ip;

    /**
     *
     * @var integer
     */
    public $topicapplication_id;

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
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("ctt");
        $this->hasMany('ctt_id', 'HClaimthistopic', 'ctt_id', ['alias' => 'HClaimthistopic']);
        $this->belongsTo('searchstring_id', 'Searchstring', 'searchstring_id', ['alias' => 'Searchstring']);
        $this->belongsTo('topicapplication_id', 'Topicapplication', 'topicapplication_id', ['alias' => 'Topicapplication']);
        $this->belongsTo('user_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'ctt';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Ctt[]|Ctt|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Ctt|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
