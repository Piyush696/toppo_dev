<?php

class LinkLinktype extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $link_id;

    /**
     *
     * @var string
     */
    public $linktype_id;

    /**
     *
     * @var string
     */
    public $isActive;

    /**
     *
     * @var string
     */
    public $isPrimary;

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
        $this->setSource("link_linktype");
        $this->belongsTo('link_id', 'Link', 'link_id', ['alias' => 'Link']);
        $this->belongsTo('linktype_id', 'Linktype', 'linktype_id', ['alias' => 'Linktype']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'link_linktype';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return LinkLinktype[]|LinkLinktype|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return LinkLinktype|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
