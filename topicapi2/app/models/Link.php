<?php

class Link extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $link_id;

    /**
     *
     * @var integer
     */
    public $rating;

    /**
     *
     * @var string
     */
    public $title;

    /**
     *
     * @var string
     */
    public $blurb;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("link");
        $this->hasMany('link_id', 'LinkLinktype', 'link_id', ['alias' => 'LinkLinktype']);
        $this->hasMany('link_id', 'LinkTag', 'link_id', ['alias' => 'LinkTag']);
        $this->hasMany('link_id', 'Linkrelationship', 'related_link_id', ['alias' => 'Linkrelationship']);
        $this->hasMany('link_id', 'Linkrelationship', 'target_link_id', ['alias' => 'Linkrelationship']);
        $this->hasMany('link_id', 'SubLink', 'link_id', ['alias' => 'SubLink']);
        $this->hasMany('link_id', 'SubTag', 'link_id', ['alias' => 'SubTag']);
        $this->hasMany('link_id', 'TCredit', 'sub-link_id', ['alias' => 'TCredit']);
        $this->hasMany('link_id', 'TabLearnChild', 'link_id', ['alias' => 'TabLearnChild']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'link';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Link[]|Link|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Link|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
