<?php

class HPageview extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $hPageview_id;

    /**
     *
     * @var integer
     */
    public $searchstring_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var string
     */
    public $tab_id;

    /**
     *
     * @var string
     */
    public $ip;

    /**
     *
     * @var string
     */
    public $timeentered;

    /**
     *
     * @var string
     */
    public $timeleft;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("h-pageview");
        $this->hasMany('h-pageview_id', 'HClick', 'history-pageview_id', ['alias' => 'HClick']);
        $this->belongsTo('searchstring_id', 'Searchstring', 'searchstring_id', ['alias' => 'Searchstring']);
        $this->belongsTo('tab_id', 'Tab', 'tab_id', ['alias' => 'Tab']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'h-pageview';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return HPageview[]|HPageview|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return HPageview|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
