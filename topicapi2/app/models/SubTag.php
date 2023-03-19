<?php

class SubTag extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $subTag_id;

    /**
     *
     * @var integer
     */
    public $link_id;

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
        $this->setSource("sub-tag");
        $this->belongsTo('approver_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('link_id', 'Link', 'link_id', ['alias' => 'Link']);
        $this->belongsTo('rejectionreason_id', 'Rejectionreason', 'rejectionreason_id', ['alias' => 'Rejectionreason']);
        $this->belongsTo('status_id', 'Status', 'status_id', ['alias' => 'Status']);
        $this->belongsTo('submitter_user_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'sub-tag';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return SubTag[]|SubTag|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return SubTag|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
