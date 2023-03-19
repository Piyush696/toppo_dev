<?php

class TabLearnMain extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabLearnMain_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $learnabout_topiccategory_id;

    /**
     *
     * @var string
     */
    public $title;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var integer
     */
    public $creator_user_id;

    /**
     *
     * @var integer
     */
    public $modifier_user_id;

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
        $this->setSource("tab-learn-main");
        $this->hasMany('tab-learn-main_id', 'TabLearnChild', 'tab-learn-main_id', ['alias' => 'TabLearnChild']);
        $this->belongsTo('creator_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('learnabout_topiccategory_id', 'Topiccategory', 'topiccategory_id', ['alias' => 'Topiccategory']);
        $this->belongsTo('modifier_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab-learn-main';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabLearnMain[]|TabLearnMain|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabLearnMain|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
