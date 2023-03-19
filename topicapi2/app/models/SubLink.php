<?php

class SubLink extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $subLink_id;

    /**
     *
     * @var integer
     */
    public $link_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $submitter_user_id;

    /**
     *
     * @var integer
     */
    public $approver_user_id;

    /**
     *
     * @var string
     */
    public $status_id;

    /**
     *
     * @var string
     */
    public $rejectionreason_id;

    /**
     *
     * @var string
     */
    public $primary_linktype_id;

    /**
     *
     * @var string
     */
    public $secondary_linktype_id;

    /**
     *
     * @var string
     */
    public $tertiary_linktype_id;

    /**
     *
     * @var string
     */
    public $datetimesubmitted;

    /**
     *
     * @var string
     */
    public $datetimeevaluated;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("sub-link");
        $this->belongsTo('approver_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('link_id', 'Link', 'link_id', ['alias' => 'Link']);
        $this->belongsTo('primary_linktype_id', 'Linktype', 'linktype_id', ['alias' => 'Linktype']);
        $this->belongsTo('rejectionreason_id', 'Rejectionreason', 'rejectionreason_id', ['alias' => 'Rejectionreason']);
        $this->belongsTo('secondary_linktype_id', 'Linktype', 'linktype_id', ['alias' => 'Linktype']);
        $this->belongsTo('status_id', 'Status', 'status_id', ['alias' => 'Status']);
        $this->belongsTo('submitter_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('tertiary_linktype_id', 'Linktype', 'linktype_id', ['alias' => 'Linktype']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'sub-link';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return SubLink[]|SubLink|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return SubLink|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
