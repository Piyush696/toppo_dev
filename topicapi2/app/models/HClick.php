<?php

class HClick extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $hClick_id;

    /**
     *
     * @var integer
     */
    public $historyPageview_id;

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
     * @var integer
     */
    public $topiclink_id;

    /**
     *
     * @var string
     */
    public $datetimeclicked;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("h-click");
        $this->belongsTo('history-pageview_id', 'H-pageview', 'h-pageview_id', ['alias' => 'HPageview']);
        $this->belongsTo('searchstring_id', 'Searchstring', 'searchstring_id', ['alias' => 'Searchstring']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
        $this->belongsTo('topiclink_id', 'Topiclink', 'topiclink_id', ['alias' => 'Topiclink']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'h-click';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return HClick[]|HClick|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return HClick|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
