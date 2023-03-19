<?php

class SubSynonym extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $subSynonym_id;

    /**
     *
     * @var string
     */
    public $synonym;

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
        $this->setSource("sub-synonym");
        $this->belongsTo('approver_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('rejectionreason_id', 'Rejectionreason', 'rejectionreason_id', ['alias' => 'Rejectionreason']);
        $this->belongsTo('status_id', 'Status', 'status_id', ['alias' => 'Status']);
        $this->belongsTo('submitter_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'sub-synonym';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return SubSynonym[]|SubSynonym|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return SubSynonym|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
