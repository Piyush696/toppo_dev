<?php

class TabFaqMain extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabFaqMain_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $subtaborder;

    /**
     *
     * @var string
     */
    public $subtabtitle;

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
        $this->setSource("tab-faq-main");
        $this->hasMany('tab-faq-main_id', 'TabFaqChild', 'tab-faq-main_id', ['alias' => 'TabFaqChild']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab-faq-main';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabFaqMain[]|TabFaqMain|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabFaqMain|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
